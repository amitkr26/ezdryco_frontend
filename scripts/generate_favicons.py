from pathlib import Path
from PIL import Image, ImageDraw

public = Path('public')
public.mkdir(exist_ok=True)

BLUE = (56, 189, 248, 255)
WHITE = (255, 255, 255, 255)

# Original logo coordinates are in a 192x192 canvas.
# We'll scale these coordinates to the target icon size.

def scale(points, target_size):
    factor = target_size / 192.0
    return [(x * factor, y * factor) for x, y in points]


def cubic_bezier(p0, p1, p2, p3, steps=12):
    points = []
    for i in range(steps + 1):
        t = i / steps
        u = 1 - t
        x = (u**3) * p0[0] + 3 * (u**2) * t * p1[0] + 3 * u * (t**2) * p2[0] + (t**3) * p3[0]
        y = (u**3) * p0[1] + 3 * (u**2) * t * p1[1] + 3 * u * (t**2) * p2[1] + (t**3) * p3[1]
        points.append((x, y))
    return points


def draw_logo(draw, size):
    # Rounded blue square background
    radius = size // 8
    draw.rounded_rectangle([(0, 0), (size, size)], radius=radius, fill=BLUE)

    # First white shape path
    shape1 = [
        (46, 42),
        (126, 42),
        (122, 59),
        (75, 59),
        (71, 80),
        (118, 80),
        (113, 97),
        (66, 97),
        (61, 121),
        (130, 121),
        (126, 138),
        (41, 138),
    ]
    draw.polygon(scale(shape1, size), fill=WHITE)

    # Second white shape path with curved segments
    shape2 = []
    shape2.extend(scale([(140, 69)], size))
    shape2.extend(scale(cubic_bezier((140, 69), (142, 61), (138, 55), (129, 55), steps=8), size))
    shape2.extend(scale([(102, 55), (99, 69), (128, 69), (112, 88)], size))
    shape2.extend(scale(cubic_bezier((112, 88), (110, 90), (108, 92), (106, 95), steps=8), size))
    shape2.extend(scale([(100, 95), (100, 138), (145, 138), (152, 138), (157, 133), (159, 126), (160, 121), (119, 121), (140, 99)], size))
    shape2.extend(scale(cubic_bezier((140, 99), (144, 95), (148, 91), (150, 84), steps=8), size))
    shape2.extend(scale([(152, 84), (152, 77), (136, 77), (140, 69)], size))
    draw.polygon(shape2, fill=WHITE)


icon_sizes = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'apple-touch-icon.png': 180,
    'android-chrome-192x192.png': 192,
    'android-chrome-512x512.png': 512,
}

for name, size in icon_sizes.items():
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw_logo(draw, size)
    img.save(public / name)

# favicon.ico with multiple sizes
ico_sizes = [16, 32, 48]
imgs = []
for size in ico_sizes:
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw_logo(ImageDraw.Draw(img), size)
    imgs.append(img)
imgs[0].save(public / 'favicon.ico', format='ICO', sizes=[(size, size) for size in ico_sizes])

print('Generated favicon assets in public/')
