// Phaser 3 loader helper for MWI production assets
// Place this file next to the /atlases folder, or adjust BASE_PATH.
export function preloadMwiAtlases(scene, basePath = 'assets/mwi/') {
  scene.load.atlas('mwi_characters_128', basePath + 'atlases/mwi_characters_128.png', basePath + 'atlases/mwi_characters_128.json');
  scene.load.atlas('mwi_characters_64', basePath + 'atlases/mwi_characters_64.png', basePath + 'atlases/mwi_characters_64.json');
  scene.load.atlas('mwi_monsters_192', basePath + 'atlases/mwi_monsters_192.png', basePath + 'atlases/mwi_monsters_192.json');
  scene.load.atlas('mwi_monsters_96', basePath + 'atlases/mwi_monsters_96.png', basePath + 'atlases/mwi_monsters_96.json');
  scene.load.atlas('mwi_environment_objects_192', basePath + 'atlases/mwi_environment_objects_192.png', basePath + 'atlases/mwi_environment_objects_192.json');
  scene.load.atlas('mwi_environment_objects_96', basePath + 'atlases/mwi_environment_objects_96.png', basePath + 'atlases/mwi_environment_objects_96.json');
  scene.load.atlas('mwi_background_panels_1280', basePath + 'atlases/mwi_background_panels_1280.png', basePath + 'atlases/mwi_background_panels_1280.json');
}

export function addLayeredCharacter(scene, x, y, config) {
  const c = scene.add.container(x, y);
  const order = ['base','cape','legs','feet','body','hair','face','head','hands','offhand','mainhand'];
  const layerMap = {};
  for (const slot of order) {
    const frame = config[slot];
    if (!frame || frame === 'none' || frame.endsWith?.('_default') && ['head_default','offhand_default'].includes(frame)) continue;
    const spr = scene.add.image(0, 0, 'mwi_characters_128', frame).setOrigin(0.5, 0.9583);
    layerMap[slot] = spr;
    c.add(spr);
  }
  c.layers = layerMap;
  c.equip = (slot, frame) => {
    if (!frame || frame === 'none') { if (layerMap[slot]) layerMap[slot].setVisible(false); return; }
    if (!layerMap[slot]) { layerMap[slot] = scene.add.image(0, 0, 'mwi_characters_128', frame).setOrigin(0.5, 0.9583); c.add(layerMap[slot]); }
    layerMap[slot].setTexture('mwi_characters_128', frame).setVisible(true);
  };
  return c;
}
