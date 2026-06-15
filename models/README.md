# MWI Models Asset Folder

此資料夾用於存放接下來依照 **MWI JRPG 素材輸出要點（三版本）** 製作的遊戲素材。

## 固定存放規則

每個素材對象以遊戲編號建立資料夾，例如：

```txt
models/skunk/
models/porcupine/
```

每個素材對象內固定包含三種版本：

```txt
models/<id>/
├─ phaser/
│  ├─ sprites_128/<id>.png
│  └─ sprites_64/<id>.png
├─ parts/<id>/
│  ├─ head.png
│  ├─ body.png
│  ├─ tail.png
│  ├─ leg_front_left.png
│  ├─ leg_front_right.png
│  ├─ leg_back_left.png
│  └─ leg_back_right.png
├─ spine/<id>/
│  ├─ attachments/
│  ├─ <id>.atlas
│  ├─ <id>_skeleton_template.json
│  ├─ slot_manifest.json
│  ├─ skin_mapping.json
│  └─ animation_contract.json
├─ reference/
└─ manifest.json
```

## 共通規格

- PNG / RGBA / 透明背景
- 無白邊殘留
- 單一主體、無浮空殘塊
- 怪物面向左，角色面向右，武器握把朝下
- 特效與主體分離
- 檔名使用全小寫底線命名，並匹配遊戲編號

## 目前流程

後續每完成一批素材，都會重新打包並同步整理到 `models/` 對應資料夾，避免素材傳承遺失。
