import os
import subprocess

videos = [
    {
        "output": "public/videos/exp_santa_ana.mp4",
        "image": "src/assets/images/exp_nature_santa_ana_1791258129967.jpg",
        "title": "Volcán Santa Ana (Ilamatepec)",
        "subtitle": "Cráter Turquesa a 2,381 msnm · El Salvador",
        "zoom_expr": "min(zoom+0.0007,1.20)",
        "x_expr": "iw/2-(iw/zoom/2)",
        "y_expr": "ih/2-(ih/zoom/2)",
        "freq1": 220, "freq2": 330, "freq3": 440
    },
    {
        "output": "public/videos/exp_suchitoto.mp4",
        "image": "src/assets/images/exp_culture_suchitoto_1791258103725.jpg",
        "title": "Suchitoto Colonial y Lago Suchitlán",
        "subtitle": "Calles empedradas, añil y miradores · El Salvador",
        "zoom_expr": "min(zoom+0.0006,1.18)",
        "x_expr": "iw/2-(iw/zoom/2)",
        "y_expr": "ih*0.4-(ih*0.4/zoom)",
        "freq1": 246, "freq2": 370, "freq3": 493
    },
    {
        "output": "public/videos/exp_surf_tunco.mp4",
        "image": "src/assets/images/exp_adventure_surf_tunco_1791258121258.jpg",
        "title": "Surf & Sunset en El Tunco",
        "subtitle": "Costa del Pacífico & Olas de Clase Mundial · El Salvador",
        "zoom_expr": "min(zoom+0.0008,1.22)",
        "x_expr": "iw*0.6-(iw*0.6/zoom)",
        "y_expr": "ih/2-(ih/zoom/2)",
        "freq1": 196, "freq2": 294, "freq3": 392
    },
    {
        "output": "public/videos/exp_coffee_apaneca.mp4",
        "image": "src/assets/images/exp_coffee_apaneca_1791258112096.jpg",
        "title": "Ruta del Café & Apaneca Canopy",
        "subtitle": "Fincas de altura, cafetales y neblina · El Salvador",
        "zoom_expr": "min(zoom+0.0007,1.20)",
        "x_expr": "iw/2-(iw/zoom/2)",
        "y_expr": "ih/2-(ih/zoom/2)",
        "freq1": 261, "freq2": 392, "freq3": 523
    },
    {
        "output": "public/videos/exp_coatepeque.mp4",
        "image": "src/assets/images/hero_coatepeque_el_salvador_1791258093926.jpg",
        "title": "Lago de Coatepeque & Aguas Termales",
        "subtitle": "Caldera volcánica de aguas turquesas · El Salvador",
        "zoom_expr": "min(zoom+0.0007,1.20)",
        "x_expr": "iw*0.4-(iw*0.4/zoom)",
        "y_expr": "ih/2-(ih/zoom/2)",
        "freq1": 220, "freq2": 277, "freq3": 330
    },
    {
        "output": "public/videos/exp_maya_tazumal.mp4",
        "image": "src/assets/images/route_esencial_elsalvador_1791259912258.jpg",
        "title": "Ruinas Mayas & Ruta Arqueológica",
        "subtitle": "Tazumal, Joya de Cerén y San Andrés · El Salvador",
        "zoom_expr": "min(zoom+0.0006,1.18)",
        "x_expr": "iw/2-(iw/zoom/2)",
        "y_expr": "ih/2-(ih/zoom/2)",
        "freq1": 174, "freq2": 261, "freq3": 349
    },
    {
        "output": "public/videos/exp_sabores_olocuilta.mp4",
        "image": "src/assets/images/route_sabores_salvador_1791259932966.jpg",
        "title": "Sabores Vivos & Pupusas de Arroz",
        "subtitle": "Olocuilta, Comal tradicional y Café de altura · El Salvador",
        "zoom_expr": "min(zoom+0.0007,1.20)",
        "x_expr": "iw/2-(iw/zoom/2)",
        "y_expr": "ih*0.6-(ih*0.6/zoom)",
        "freq1": 220, "freq2": 330, "freq3": 440
    },
    {
        "output": "public/videos/exp_parapente_ilopango.mp4",
        "image": "src/assets/images/hero_coatepeque_el_salvador_1791258093926.jpg",
        "title": "Vuelo en Parapente & Aventura Aérea",
        "subtitle": "Vistas 360° sobre el cráter volcánico · El Salvador",
        "zoom_expr": "min(zoom+0.0008,1.22)",
        "x_expr": "iw*0.55-(iw*0.55/zoom)",
        "y_expr": "ih*0.45-(ih*0.45/zoom)",
        "freq1": 293, "freq2": 440, "freq3": 587
    },
    {
        "output": "public/videos/route_esencial.mp4",
        "image": "src/assets/images/route_esencial_elsalvador_1791259912258.jpg",
        "title": "La Ruta Esencial de El Salvador",
        "subtitle": "Circuito insignia: Cultura, Volcanes y Playas · 5 Días",
        "zoom_expr": "min(zoom+0.0007,1.20)",
        "x_expr": "iw/2-(iw/zoom/2)",
        "y_expr": "ih/2-(ih/zoom/2)",
        "freq1": 220, "freq2": 277, "freq3": 330
    },
    {
        "output": "public/videos/route_costa_volcanes.mp4",
        "image": "src/assets/images/route_costa_volcanes_1791259922631.jpg",
        "title": "Cordillera & Océano: Costa y Volcanes",
        "subtitle": "De la cumbre del Ilamatepec al oleaje de La Libertad · 4 Días",
        "zoom_expr": "min(zoom+0.0007,1.20)",
        "x_expr": "iw*0.45-(iw*0.45/zoom)",
        "y_expr": "ih/2-(ih/zoom/2)",
        "freq1": 196, "freq2": 247, "freq3": 294
    },
    {
        "output": "public/videos/route_sabores.mp4",
        "image": "src/assets/images/route_sabores_salvador_1791259932966.jpg",
        "title": "Sabores Vivos de El Salvador",
        "subtitle": "Ruta gastronómica autóctona de café, cacao y pupusas · 3 Días",
        "zoom_expr": "min(zoom+0.0007,1.20)",
        "x_expr": "iw/2-(iw/zoom/2)",
        "y_expr": "ih*0.55-(ih*0.55/zoom)",
        "freq1": 220, "freq2": 330, "freq3": 440
    }
]

os.makedirs("public/videos", exist_ok=True)

for v in videos:
    print(f"Creating video: {v['output']} ...")
    # Video filter:
    # 1. scale and zoompan for Ken Burns effect over 450 frames (18s @ 25fps)
    # 2. fade in from black (0.8s) and fade out to black (0.8s)
    vf = (
        f"scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,"
        f"zoompan=z='{v['zoom_expr']}':d=450:x='{v['x_expr']}':y='{v['y_expr']}':s=1280x720:fps=25,"
        f"fade=t=in:st=0:d=0.8,fade=t=out:st=17.2:d=0.8"
    )
    
    # Audio filter: smooth atmospheric ambient chord with fade in/out
    f1, f2, f3 = v['freq1'], v['freq2'], v['freq3']
    af = (
        f"aevalsrc='0.08*sin(2*PI*{f1}*t)+0.06*sin(2*PI*{f2}*t)+0.04*sin(2*PI*{f3}*t)|"
        f"0.08*sin(2*PI*{f1}*t)+0.06*sin(2*PI*{f2}*t)+0.04*sin(2*PI*{f3}*t)':s=44100:d=18,"
        f"afade=t=in:st=0:d=1.5,afade=t=out:st=16.5:d=1.5,volume=0.4"
    )
    
    cmd = [
        "ffmpeg", "-y",
        "-loop", "1", "-i", v["image"],
        "-f", "lavfi", "-i", af,
        "-vf", vf,
        "-c:v", "libx264", "-preset", "veryfast", "-crf", "25",
        "-c:a", "aac", "-b:a", "96k",
        "-t", "18",
        "-pix_fmt", "yuv420p",
        "-movflags", "+faststart",
        v["output"]
    ]
    
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if res.returncode != 0:
        print(f"Error on {v['output']}: {res.stderr.decode('utf-8')[:300]}")
    else:
        size = os.path.getsize(v['output']) / (1024 * 1024)
        print(f"Success: {v['output']} ({size:.2f} MB)")

print("All experience and route videos generated successfully!")
