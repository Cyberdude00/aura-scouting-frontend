from pathlib import Path
import re

root = Path('src/app/features/pages/gallery/data/models')
legacy_root = []
legacy_fullmaterial = []
missing_full = []

for p in sorted(root.rglob('*.ts')):
    txt = p.read_text('utf-8')
    idx = txt.find('fullMaterialData:')
    if idx == -1:
        missing_full.append(str(p))
        continue
    pre = txt[:idx]
    if re.search(r'^\s*(book|extraMaterial|polas|extraSnaps|videos)\s*:', pre, re.MULTILINE):
        legacy_root.append(str(p))

    body = txt[idx:]
    if re.search(r'fullMaterialData\s*:\s*\{[^}]*\b(book|polas|extraMaterial|extraSnaps)\s*:', body, re.MULTILINE):
        legacy_fullmaterial.append(str(p))

print('missing_full:', len(missing_full))
for f in missing_full:
    print('MISSING_FULL:', f)
print('legacy_root:', len(legacy_root))
for f in legacy_root:
    print('LEGACY_ROOT:', f)
print('legacy_fullmaterial:', len(legacy_fullmaterial))
for f in legacy_fullmaterial:
    print('LEGACY_FULLMATERIAL:', f)
