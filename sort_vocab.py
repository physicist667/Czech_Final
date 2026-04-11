#!/usr/bin/env python3
"""
Script to restructure vocabulary.ts:
1. Add 'group' field to each VocabCategory (part of speech)
2. Sort categories by level (A1 → A2 → B1 → B2), then by group within level
3. Sort words within each category by their individual level
4. Update VocabCategory interface to include group field
"""

import re
import json

# ─── Group mapping for each category ID ───
group_map = {
    # Фразы и выражения
    'greetings': 'Фразы и выражения',
    'a2-phrases-everyday': 'Фразы и выражения',
    'b2-idioms-proverbs': 'Фразы и выражения',

    # Числительные
    'numbers': 'Числительные',
    'a2-numbers-advanced': 'Числительные',

    # Существительные
    'food': 'Существительные',
    'family': 'Существительные',
    'transport': 'Существительные',
    'city': 'Существительные',
    'time': 'Существительные',
    'body': 'Существительные',
    'animals': 'Существительные',
    'nature': 'Существительные',
    'clothing': 'Существительные',
    'home': 'Существительные',
    'professions': 'Существительные',
    'sports': 'Существительные',
    'emotions': 'Существительные',
    'school': 'Существительные',
    'travel': 'Существительные',
    'fruits': 'Существительные',
    'furniture': 'Существительные',
    'tech': 'Существительные',
    'weather': 'Существительные',
    'shopping': 'Существительные',
    'hobbies': 'Существительные',
    'household': 'Существительные',
    'finance': 'Существительные',
    'media': 'Существительные',
    'politics': 'Существительные',
    'culture': 'Существительные',
    'medicine': 'Существительные',
    'abstract': 'Существительные',
    'work-career': 'Существительные',
    'restaurant': 'Существительные',
    'a2-plants': 'Существительные',
    'a2-social': 'Существительные',
    'a2-health': 'Существительные',
    'a2-shopping-detail': 'Существительные',
    'a2-tech-basic': 'Существительные',
    'a2-food-detail': 'Существительные',
    'a2-daily-routine': 'Существительные',
    'a2-services': 'Существительные',
    'a2-nature-act': 'Существительные',
    'a2-media-entertainment': 'Существительные',
    'a2-housing-rent': 'Существительные',
    'a2-education-detail': 'Существительные',
    'a2-transport-detail': 'Существительные',
    'a2-house-rooms': 'Существительные',
    'a2-events-holidays': 'Существительные',
    'a2-relationships': 'Существительные',
    'b1-science': 'Существительные',
    'b1-economy': 'Существительные',
    'b1-environment': 'Существительные',
    'b1-history': 'Существительные',
    'b1-law': 'Существительные',
    'b1-geography': 'Существительные',
    'b1-education': 'Существительные',
    'b1-art': 'Существительные',
    'b1-music': 'Существительные',
    'b1-literature': 'Существительные',
    'b1-psychology': 'Существительные',
    'b1-philosophy': 'Существительные',
    'b1-sports-detail': 'Существительные',
    'b1-cooking': 'Существительные',
    'b1-communication': 'Существительные',
    'b1-transport-advanced': 'Существительные',
    'b1-society': 'Существительные',
    'b1-movies': 'Существительные',
    'b1-fashion': 'Существительные',
    'b1-medicine-advanced': 'Существительные',
    'b1-agriculture': 'Существительные',
    'b1-energy': 'Существительные',
    'b1-military': 'Существительные',
    'b1-finance-adv': 'Существительные',
    'b1-it-terms': 'Существительные',
    'b1-czech-traditions': 'Существительные',
    'b1-grammar-terms': 'Существительные',
    'b1-politics-adv': 'Существительные',
    'b1-space': 'Существительные',
    'b1-math': 'Существительные',
    'b1-architecture': 'Существительные',
    'b1-religion': 'Существительные',
    'b1-nature-detail': 'Существительные',
    'b2-law-advanced': 'Существительные',
    'b2-science-advanced': 'Существительные',
    'b2-economy-advanced': 'Существительные',
    'b2-medicine-advanced': 'Существительные',
    'b2-politics-advanced': 'Существительные',
    'b2-it-advanced': 'Существительные',
    'b2-sociology': 'Существительные',
    'b2-engineering': 'Существительные',
    'b2-environment-advanced': 'Существительные',
    'b2-journalism': 'Существительные',
    'b2-urbanism': 'Существительные',
    'b2-logistics': 'Существительные',
    'b2-demographics': 'Существительные',
    'b2-botany': 'Существительные',
    'b2-zoology': 'Существительные',
    'b2-geology': 'Существительные',
    'b2-anthropology': 'Существительные',
    'b2-published': 'Существительные',
    'b2-architecture-adv': 'Существительные',
    'b2-sports-science': 'Существительные',
    'b2-gastronomy': 'Существительные',
    'b2-numismatics': 'Существительные',
    'b2-navigation': 'Существительные',
    'b2-forensics': 'Существительные',
    'b2-veterinary': 'Существительные',
    'b2-space-exploration': 'Существительные',
    'b2-pharmacology': 'Существительные',
    'b2-telecommunications': 'Существительные',
    'b2-fashion-history': 'Существительные',
    'b2-astronomy': 'Существительные',
    'b2-genetics': 'Существительные',
    'b2-real-estate': 'Существительные',
    'b2-patent-law': 'Существительные',
    'b2-cryptography': 'Существительные',
    'b2-ecology-water': 'Существительные',
    'b2-military-history': 'Существительные',
    'b2-graphic-design': 'Существительные',
    'b2-social-media': 'Существительные',
    'b2-czech-literature': 'Существительные',
    'b2-transport-future': 'Существительные',
    'b2-quantum-tech': 'Существительные',
    'b2-renewable-energy': 'Существительные',
    'b2-linguistics': 'Существительные',
    'b2-literature-advanced': 'Существительные',
    'b2-philosophy-advanced': 'Существительные',
    'b2-music-advanced': 'Существительные',
    'b2-art-advanced': 'Существительные',
    'b2-psychology-advanced': 'Существительные',
    'b2-history-advanced': 'Существительные',
    'b2-math-advanced': 'Существительные',
    'b2-ethics': 'Существительные',
    'b2-cinema': 'Существительные',
    'b2-theater': 'Существительные',
    'b2-physics': 'Существительные',
    'b2-chemistry': 'Существительные',
    'b2-diplomacy': 'Существительные',
    'b2-education-advanced': 'Существительные',
    'b2-marketing': 'Существительные',

    # Прилагательные
    'colors': 'Прилагательные',
    'adjectives': 'Прилагательные',
    'a2-descriptions': 'Прилагательные',
    'a2-adjectives-daily': 'Прилагательные',
    'b1-adjectives-adv': 'Прилагательные',
    'b1-adjectives-abstract': 'Прилагательные',
    'b2-adjectives-academic': 'Прилагательные',
    'a1-adjectives-appearance': 'Прилагательные',
    'a1-adjectives-sensory': 'Прилагательные',
    'a2-adjectives-emotions': 'Прилагательные',
    'a2-adjectives-weather': 'Прилагательные',
    'b1-adjectives-quality': 'Прилагательные',
    'b2-adjectives-intellectual': 'Прилагательные',

    # Глаголы
    'verbs': 'Глаголы',
    'food_verbs': 'Глаголы',
    'comm_verbs': 'Глаголы',
    'b1-verbs-adv': 'Глаголы',
    'b1-phrasal-verbs': 'Глаголы',
    'a2-verbs-daily': 'Глаголы',
    'b1-verbs-cognitive': 'Глаголы',
    'b2-verbs-formal': 'Глаголы',
    'a1-verbs-movement': 'Глаголы',
    'a1-verbs-sensory': 'Глаголы',
    'a2-verbs-communication': 'Глаголы',
    'b1-verbs-social': 'Глаголы',
    'b2-verbs-academic': 'Глаголы',

    # Наречия
    'adverbs': 'Наречия',
    'a2-adverbs-advanced': 'Наречия',
    'b1-adverbs-manner': 'Наречия',
    'b2-adverbs-academic': 'Наречия',
    'a1-adverbs-time-place': 'Наречия',
    'a2-adverbs-manner': 'Наречия',
    'b1-adverbs-degree': 'Наречия',
    'b2-adverbs-logical': 'Наречия',
    'a1-adverbs-frequency': 'Наречия',
    'a2-adverbs-evaluative': 'Наречия',

    # Предлоги
    'prepositions': 'Предлоги',
    'a2-prepositions-advanced': 'Предлоги',

    # Местоимения
    'pronouns': 'Местоимения',

    # Союзы
    'conjunctions': 'Союзы',
    'a2-conjunctions-advanced': 'Союзы',
}

# Group display order (within each level)
group_order = [
    'Существительные',
    'Числительные',
    'Прилагательные',
    'Глаголы',
    'Наречия',
    'Предлоги',
    'Местоимения',
    'Союзы',
    'Фразы и выражения',
]

level_order = ['A1', 'A2', 'B1', 'B2']

def get_group_index(group):
    try:
        return group_order.index(group)
    except ValueError:
        return 999

def get_level_index(level):
    try:
        return level_order.index(level)
    except ValueError:
        return 999

def parse_word_line(line):
    """Parse a word object line, return (line_text, level)."""
    level_match = re.search(r"level:\s*'(A1|A2|B1|B2)'", line)
    level = level_match.group(1) if level_match else 'A1'
    return line.strip(), level

def parse_category_block(text):
    """Parse a category block and return metadata dict."""
    id_match = re.search(r"id:\s*'([^']+)'", text)
    name_match = re.search(r"name:\s*'([^']+)'", text)
    icon_match = re.search(r"icon:\s*'([^']+)'", text)
    level_match = re.search(r"level:\s*'(A1|A2|B1|B2)'", text)
    
    cat_id = id_match.group(1) if id_match else ''
    cat_name = name_match.group(1) if name_match else ''
    cat_icon = icon_match.group(1) if icon_match else ''
    cat_level = level_match.group(1) if level_match else 'A1'
    cat_group = group_map.get(cat_id, 'Существительные')
    
    return {
        'id': cat_id,
        'name': cat_name,
        'icon': cat_icon,
        'level': cat_level,
        'group': cat_group,
        'raw_text': text,
    }

def main():
    with open('/home/z/my-project/src/data/vocabulary.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find header (interfaces + export line) and the array content
    # The pattern: everything up to and including 'export const vocabularyData: VocabCategory[] = ['
    array_start = re.search(r"export const vocabularyData: VocabCategory\[\] = \[\s*\n", content)
    if not array_start:
        print("ERROR: Could not find vocabularyData array start")
        return
    
    header_end = array_start.end()
    header = content[:header_end]
    
    # Find the end of the array: last '];' in the file
    array_end = content.rfind('];')
    if array_end == -1:
        print("ERROR: Could not find array end")
        return
    
    footer = content[array_end:]  # '];\n'
    
    # Extract array content (between header and footer)
    array_content = content[header_end:array_end]
    
    # Split into category blocks
    # Each category starts with '  {' at the beginning of a line (after header)
    # We'll split by finding category boundaries
    
    # First, find all category start positions
    cat_starts = []
    pos = 0
    while True:
        # Find next '  {' that's a category start (followed by id, name, icon, level, words)
        idx = array_content.find('\n  {\n', pos)
        if idx == -1:
            break
        cat_starts.append(idx + 1)  # +1 to skip the \n
        pos = idx + 1
    
    # Also check if first category starts right after header without newline
    if array_content.lstrip().startswith('{'):
        cat_starts = [0] + [s for s in cat_starts if s > 0]
    
    if not cat_starts:
        print("ERROR: No categories found")
        return
    
    # Extract category blocks
    categories = []
    for i, start in enumerate(cat_starts):
        if i + 1 < len(cat_starts):
            end = cat_starts[i + 1]
            block = array_content[start:end]
        else:
            block = array_content[start:]
        # Remove trailing comma and whitespace
        block = block.rstrip().rstrip(',')
        categories.append(block)
    
    print(f"Found {len(categories)} categories")
    
    # Parse each category
    parsed_cats = []
    for block in categories:
        parsed = parse_category_block(block)
        if parsed['id']:
            parsed_cats.append(parsed)
    
    print(f"Parsed {len(parsed_cats)} categories with IDs")
    
    # Check for missing group mappings
    unmapped = [c['id'] for c in parsed_cats if c['id'] not in group_map]
    if unmapped:
        print(f"WARNING: {len(unmapped)} unmapped categories: {unmapped}")
        for uid in unmapped:
            print(f"  - {uid}: '{[c['name'] for c in parsed_cats if c['id'] == uid][0]}'")
    
    # Sort categories: by level first, then by group within level
    parsed_cats.sort(key=lambda c: (get_level_index(c['level']), get_group_index(c['group']), c['id']))
    
    # Within each category, sort words by level
    def sort_words_in_block(block_text):
        """Sort the words array within a category block by level."""
        # Find the words array: 'words: [' ... ']'
        words_start = block_text.find("words: [")
        if words_start == -1:
            return block_text
        
        words_start += len("words: [")
        
        # Find matching ']' for the words array
        depth = 1
        pos = words_start
        while pos < len(block_text) and depth > 0:
            if block_text[pos] == '[':
                depth += 1
            elif block_text[pos] == ']':
                depth -= 1
            pos += 1
        words_end = pos - 1  # position of ']'
        
        before_words = block_text[:words_start]
        after_words = block_text[words_end:]
        
        words_content = block_text[words_start:words_end]
        
        # Split into individual word lines
        # Each word is like: { level: 'A1', id: '...', ... },
        word_entries = []
        current_word = ''
        brace_depth = 0
        
        for char in words_content:
            current_word += char
            if char == '{':
                brace_depth += 1
            elif char == '}':
                brace_depth -= 1
                if brace_depth == 0:
                    word_entries.append(current_word.strip().rstrip(','))
                    current_word = ''
        
        if current_word.strip():
            word_entries.append(current_word.strip().rstrip(','))
        
        # Parse and sort by level
        def get_word_level(entry):
            m = re.search(r"level:\s*'(A1|A2|B1|B2)'", entry)
            return m.group(1) if m else 'A1'
        
        word_entries.sort(key=get_word_level)
        
        # Rebuild words content
        sorted_words = ',\n      '.join(word_entries)
        if not sorted_words.endswith(','):
            sorted_words += ','
        
        return before_words + '\n      ' + sorted_words + '\n    ' + after_words
    
    # Build the new file
    new_header = header
    
    # Update the interface to include group
    # Replace the VocabCategory interface
    old_interface = """export interface VocabCategory {
  id: string;
  name: string;
  icon: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  words: VocabWord[];
}"""
    
    new_interface = """export interface VocabCategory {
  id: string;
  name: string;
  icon: string;
  group: string;
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  words: VocabWord[];
}"""
    
    new_header = new_header.replace(old_interface, new_interface)
    
    # Build category blocks
    cat_blocks = []
    for cat in parsed_cats:
        # Sort words within category
        sorted_block = sort_words_in_block(cat['raw_text'])
        
        # Insert group field after icon field
        # Find the line with 'icon:' and insert group after it
        lines = sorted_block.split('\n')
        new_lines = []
        for line in lines:
            new_lines.append(line)
            if "icon:" in line and cat['icon'] in line:
                new_lines.append(f"    group: '{cat['group']}',")
        
        cat_blocks.append('\n'.join(new_lines))
    
    # Join all categories
    array_body = ',\n'.join(cat_blocks) + ',\n'
    
    # Write the final file
    new_content = new_header + array_body + footer
    
    with open('/home/z/my-project/src/data/vocabulary.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    # Stats
    a1_count = len([c for c in parsed_cats if c['level'] == 'A1'])
    a2_count = len([c for c in parsed_cats if c['level'] == 'A2'])
    b1_count = len([c for c in parsed_cats if c['level'] == 'B1'])
    b2_count = len([c for c in parsed_cats if c['level'] == 'B2'])
    
    print(f"\nSorting complete!")
    print(f"Total categories: {len(parsed_cats)}")
    print(f"  A1: {a1_count}")
    print(f"  A2: {a2_count}")
    print(f"  B1: {b1_count}")
    print(f"  B2: {b2_count}")
    
    # Group stats
    group_stats = {}
    for c in parsed_cats:
        g = c['group']
        group_stats[g] = group_stats.get(g, 0) + 1
    print(f"\nGroup distribution:")
    for g in group_order:
        if g in group_stats:
            print(f"  {g}: {group_stats[g]}")

if __name__ == '__main__':
    main()
