# MWI Phaser Production Asset Pack

## Coverage
- READY / refined image assets: 152
- Logic / parameter / template records: 17
- Total records: 169

## Main runtime files
- `atlases/mwi_characters_128.png` + `.json`
- `atlases/mwi_characters_64.png` + `.json`
- `atlases/mwi_monsters_192.png` + `.json`
- `atlases/mwi_monsters_96.png` + `.json`
- `atlases/mwi_environment_objects_192.png` + `.json`
- `atlases/mwi_environment_objects_96.png` + `.json`
- `atlases/mwi_background_panels_1280.png` + `.json`

## Refinement performed
- Removed grid/checker background into alpha transparency for sprites and props.
- Cropped each generated cell into a named frame.
- Trimmed, re-centered, and standardized canvases.
- Exported dual resolutions for Phaser runtime.
- Created Phaser JSON hash atlases, individual PNG sprites, manifest, and loader helper.

## Known limits
This pack is production-oriented and immediately loadable, but because the source images are generated atlas sheets rather than layered PSD/Spine files, some white armor highlights or complex transparent holes may need manual visual review if used at very large scale.
