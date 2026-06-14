from pathlib import Path
import re

root = Path('src/app/features/pages/gallery/data/models')
files = list(root.rglob('*.data.ts'))

# Replace top-level model keys
replacements = [
    (re.compile(r'^(\s*)book:\s*', re.MULTILINE), r'\1bookAura: '),
    (re.compile(r'^(\s*)extraMaterial:\s*', re.MULTILINE), r'\1bookExtra: '),
    (re.compile(r'^(\s*)polas:\s*', re.MULTILINE), r'\1snapsSelect: '),
    (re.compile(r'^(\s*)extraSnaps:\s*', re.MULTILINE), r'\1snapsExtra: '),
]

for path in files:
    text = path.read_text(encoding='utf-8')
    orig = text

    # Replace inside fullMaterialData blocks only
    def replace_full_material_block(match):
        block = match.group(0)
        for patt, repl in replacements[1:]:
            block = patt.sub(repl, block)
        return block

    text = re.sub(r'fullMaterialData\s*:\s*\{[\s\S]*?\n\s*\}', replace_full_material_block, text)

    # Replace top-level keys everywhere else
    for patt, repl in replacements:
        text = patt.sub(repl, text)

    if text != orig:
        path.write_text(text, encoding='utf-8')
        print('Updated', path)
