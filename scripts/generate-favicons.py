import os
from PIL import Image, ImageDraw
import numpy as np

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    logo_path = os.path.join(root_dir, 'public', 'cosmovertex-logo.png')
    
    img = Image.open(logo_path)
    
    # 1. Precise crop of emblem mark:
    # Top emblem bounds: X: 275..771 (width 496), Y: 120..582 (height 462)
    emblem = img.crop((275, 120, 771, 582)).convert('RGB')
    arr = np.array(emblem).astype(float)
    
    # 2. Smoothly remap the off-white background (~248-250) to pure white (255)
    curve = np.arange(256, dtype=float)
    for i in range(256):
        if i >= 246:
            curve[i] = 255
        elif i >= 200:
            t = (i - 200) / 46.0
            curve[i] = i + (255 - i) * (3 * t**2 - 2 * t**3)
        else:
            curve[i] = i
            
    arr_remapped = curve[arr.astype(int)]
    clean_emblem = Image.fromarray(arr_remapped.astype(np.uint8))
    
    # 3. Create master 512x512 rounded squircle badge (matches brand styling on site)
    master_512 = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    draw = ImageDraw.Draw(master_512)
    draw.rounded_rectangle([12, 12, 500, 500], radius=110, fill=(255, 255, 255, 255))
    
    # Scale emblem to comfortably fit inside squircle
    e_scaled = clean_emblem.resize((430, 400), Image.Resampling.LANCZOS)
    offset_x = (512 - 430) // 2
    offset_y = (512 - 400) // 2
    master_512.paste(e_scaled, (offset_x, offset_y))
    
    # 4. Create Apple Touch Icon (180x180) - Solid white background with emblem
    apple_180 = Image.new('RGBA', (180, 180), (255, 255, 255, 255))
    e_apple = clean_emblem.resize((150, 140), Image.Resampling.LANCZOS)
    apple_180.paste(e_apple, ((180 - 150) // 2, (180 - 140) // 2))
    
    # 5. Save app/favicon.ico with multi-resolution frames
    app_favicon = os.path.join(root_dir, 'app', 'favicon.ico')
    public_favicon = os.path.join(root_dir, 'public', 'favicon.ico')
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    
    master_512.save(app_favicon, format='ICO', sizes=ico_sizes)
    master_512.save(public_favicon, format='ICO', sizes=ico_sizes)
    print(f'Saved {app_favicon} and {public_favicon}')
    
    # 6. Save app/icon.png and public/icon.png (512x512)
    app_icon = os.path.join(root_dir, 'app', 'icon.png')
    public_icon = os.path.join(root_dir, 'public', 'icon.png')
    master_512.save(app_icon, format='PNG')
    master_512.save(public_icon, format='PNG')
    print(f'Saved {app_icon} and {public_icon}')
    
    # 7. Save app/apple-icon.png and public/apple-icon.png (180x180)
    app_apple = os.path.join(root_dir, 'app', 'apple-icon.png')
    public_apple = os.path.join(root_dir, 'public', 'apple-icon.png')
    apple_180.save(app_apple, format='PNG')
    apple_180.save(public_apple, format='PNG')
    print(f'Saved {app_apple} and {public_apple}')
    
    print('Favicon replacement completed successfully.')

if __name__ == '__main__':
    main()
