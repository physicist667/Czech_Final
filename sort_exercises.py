#!/usr/bin/env python3
"""
Add level field to exercises.ts and sort by level.
Categories map to levels from vocabulary data.
"""

import re

# Category to level mapping (based on vocabulary.ts)
cat_to_level = {
    'greetings': 'A1',
    'food': 'A1',
    'family': 'A1',
    'colors': 'A1',
    'transport': 'A1',
    'city': 'A2',
    'time': 'A1',
    'numbers': 'A1',
    'body': 'A1',
    'animals': 'A1',
    'nature': 'A1',
    'clothing': 'A1',
    'home': 'A1',
    'verbs': 'A1',
    'professions': 'A2',
    'sports': 'A2',
    'emotions': 'A2',
    'school': 'A1',
    'travel': 'A2',
    'fruits': 'A1',
    'adverbs': 'A1',
    'furniture': 'A1',
    'tech': 'B1',
    'work-career': 'B1',
    'restaurant': 'B1',
    'grammar': 'A1',
    'hobbies': 'A1',
    'weather': 'A1',
    'shopping': 'A1',
    'prepositions': 'A1',
    'pronouns': 'A1',
    'conjunctions': 'A1',
    'adjectives': 'A1',
    'household': 'A2',
    'finance': 'A2',
    'media': 'B1',
    'politics': 'B1',
    'culture': 'B1',
    'medicine': 'B1',
}

level_order = {'A1': 0, 'A2': 1, 'B1': 2, 'B2': 3}

def get_level_from_category(cat):
    return cat_to_level.get(cat, 'A1')

def add_level_to_line(line):
    """Add level field to an exercise object line before the closing }."""
    cat_match = re.search(r"category:\s*'([^']+)'", line)
    if not cat_match:
        return line
    
    cat = cat_match.group(1)
    level = get_level_from_category(cat)
    
    # Check if level already exists
    if "level:" in line:
        return line
    
    # Add level before the closing }
    # Insert after the category field
    line = line.rstrip()
    if line.endswith('}'):
        line = line[:-1] + f", level: '{level}'" + "}"
    elif line.endswith('},'):
        line = line[:-2] + f", level: '{level}'" + "},"
    
    return line

def add_level_to_matching_set(block_text):
    """Add level to a matching set."""
    # Get the first pair to determine category from title
    id_match = re.search(r"id:\s*'([^']+)'", block_text)
    if not id_match:
        return block_text
    
    set_id = id_match.group(1)
    
    # Map matching set IDs to levels
    ms_level_map = {
        'ms1': 'A1', 'ms2': 'A1', 'ms3': 'A1', 'ms4': 'A1', 'ms5': 'A1',
        'ms6': 'A1', 'ms7': 'A1', 'ms8': 'A1', 'ms9': 'A1', 'ms10': 'A1',
        'ms11': 'A2', 'ms12': 'A2', 'ms13': 'A2', 'ms14': 'A1', 'ms15': 'B1',
        'ms-wc1': 'B1', 'ms-rst1': 'B1',
    }
    
    level = ms_level_map.get(set_id, 'A1')
    
    if 'level:' in block_text:
        return block_text
    
    # Add level after the id line
    lines = block_text.split('\n')
    new_lines = []
    for line in lines:
        new_lines.append(line)
        if f"id: '{set_id}'" in line:
            new_lines.append(f"    level: '{level}',")
    
    return '\n'.join(new_lines)

def sort_exercises(content):
    """Sort exercise items within arrays by level."""
    
    # 1. Update interfaces to include optional level
    old_mc = """export interface MultipleChoiceQuestion {
  id: string;
  czech: string;
  correctAnswer: string;
  options: string[];
  category: string;
}"""
    new_mc = """export interface MultipleChoiceQuestion {
  id: string;
  czech: string;
  correctAnswer: string;
  options: string[];
  category: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
}"""
    content = content.replace(old_mc, new_mc)
    
    old_fb = """export interface FillBlankQuestion {
  id: string;
  sentence: string;
  sentenceWithBlank: string;
  correctAnswer: string;
  options: string[];
  category: string;
  hint: string;
}"""
    new_fb = """export interface FillBlankQuestion {
  id: string;
  sentence: string;
  sentenceWithBlank: string;
  correctAnswer: string;
  options: string[];
  category: string;
  hint: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
}"""
    content = content.replace(old_fb, new_fb)
    
    old_ms = """export interface MatchingSet {
  id: string;
  title: string;
  pairs: MatchingPair[];
}"""
    new_ms = """export interface MatchingSet {
  id: string;
  title: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  pairs: MatchingPair[];
}"""
    content = content.replace(old_ms, new_ms)
    
    old_sb = """export interface SentenceBuildingExercise {
  id: string;
  correctSentence: string;
  translation: string;
  words: string[];
  category: string;
}"""
    new_sb = """export interface SentenceBuildingExercise {
  id: string;
  correctSentence: string;
  translation: string;
  words: string[];
  category: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
}"""
    content = content.replace(old_sb, new_sb)
    
    old_tf = """export interface TrueFalseQuestion {
  id: string;
  czech: string;
  russian: string;
  isCorrect: boolean;
  correctRussian: string;
  category: string;
}"""
    new_tf = """export interface TrueFalseQuestion {
  id: string;
  czech: string;
  russian: string;
  isCorrect: boolean;
  correctRussian: string;
  category: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
}"""
    content = content.replace(old_tf, new_tf)
    
    # 2. Process each array
    # Multiple choice questions
    def process_simple_array(content, array_name, end_pattern):
        """Process a simple array of flat objects."""
        start_pattern = f"export const {array_name}:"
        start_idx = content.find(start_pattern)
        if start_idx == -1:
            return content
        
        # Find array start [ and end ]
        arr_start = content.find('[', start_idx)
        if arr_start == -1:
            return content
        
        depth = 0
        arr_end = arr_start
        for i in range(arr_start, len(content)):
            if content[i] == '[':
                depth += 1
            elif content[i] == ']':
                depth -= 1
                if depth == 0:
                    arr_end = i
                    break
        
        before = content[:arr_start]
        after = content[arr_end+1:]
        
        array_content = content[arr_start+1:arr_end]
        
        # Split into individual items
        # Each item ends with },
        items = []
        current = ''
        depth = 0
        for char in array_content:
            current += char
            if char == '{':
                depth += 1
            elif char == '}':
                depth -= 1
                if depth == 0:
                    item = current.strip()
                    if item:
                        items.append(item)
                    current = ''
        
        # Add level and sort
        processed_items = []
        for item in items:
            processed = add_level_to_line(item)
            processed_items.append(processed)
        
        def get_item_level(item):
            m = re.search(r"level:\s*'(A1|A2|B1|B2)'", item)
            return m.group(1) if m else 'A1'
        
        processed_items.sort(key=get_item_level)
        
        # Rebuild
        # Keep original formatting
        sorted_content = ',\n'.join(processed_items)
        
        return before + '[\n' + sorted_content + '\n]' + after
    
    # Process multipleChoiceQuestions
    content = process_simple_array(content, 'multipleChoiceQuestions', '];')
    
    # Process fillBlankQuestions
    content = process_simple_array(content, 'fillBlankQuestions', '];')
    
    # Process matchingSets (different structure - nested objects)
    def process_matching_sets(content):
        start_pattern = "export const matchingSets:"
        start_idx = content.find(start_pattern)
        if start_idx == -1:
            return content
        
        arr_start = content.find('[', start_idx)
        depth = 0
        arr_end = arr_start
        for i in range(arr_start, len(content)):
            if content[i] == '[':
                depth += 1
            elif content[i] == ']':
                depth -= 1
                if depth == 0:
                    arr_end = i
                    break
        
        before = content[:arr_start]
        after = content[arr_end+1:]
        array_content = content[arr_start+1:arr_end]
        
        # Split into matching set blocks
        sets = []
        current = ''
        depth = 0
        for char in array_content:
            current += char
            if char == '{':
                depth += 1
            elif char == '}':
                depth -= 1
                if depth == 0:
                    item = current.strip().rstrip(',')
                    if item:
                        sets.append(item)
                    current = ''
        
        # Add level and sort
        processed_sets = [add_level_to_matching_set(s) for s in sets]
        
        def get_set_level(s):
            m = re.search(r"level:\s*'(A1|A2|B1|B2)'", s)
            return m.group(1) if m else 'A1'
        
        processed_sets.sort(key=get_set_level)
        
        sorted_content = ',\n'.join(processed_sets)
        return before + '[\n' + sorted_content + '\n]' + after
    
    content = process_matching_sets(content)
    
    # Process sentenceBuildingExercises
    content = process_simple_array(content, 'sentenceBuildingExercises', '];')
    
    # Process trueFalseQuestions
    content = process_simple_array(content, 'trueFalseQuestions', '];')
    
    return content

def main():
    with open('/home/z/my-project/src/data/exercises.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = sort_exercises(content)
    
    with open('/home/z/my-project/src/data/exercises.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Exercises updated with levels and sorted!")

if __name__ == '__main__':
    main()
