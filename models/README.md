# MWI Models Asset Folder

此資料夾用於存放依照 **MWI JRPG 素材輸出要點（三版本）** 製作的遊戲素材。

請注意：**生物/怪物** 與 **角色/穿戴裝備** 的歸檔邏輯不同，不可混用。

---

## 1. 生物 / 怪物歸檔規則

適用：`skunk`、`porcupine`、`rat`、`fly`、`frog`、`snake` 等怪物或生物素材。

每個生物以遊戲編號建立獨立資料夾：

```txt
models/<monster_id>/
```

標準結構：

```txt
models/<monster_id>/
├─ phaser/
│  ├─ sprites_128/<monster_id>.png
│  └─ sprites_64/<monster_id>.png
├─ parts/<monster_id>/
│  ├─ head.png
│  ├─ body.png
│  ├─ tail.png
│  ├─ leg_front_left.png
│  ├─ leg_front_right.png
│  ├─ leg_back_left.png
│  └─ leg_back_right.png
├─ spine/<monster_id>/
│  ├─ attachments/
│  │  ├─ head.png
│  │  ├─ body.png
│  │  ├─ tail.png
│  │  ├─ leg_front_left.png
│  │  ├─ leg_front_right.png
│  │  ├─ leg_back_left.png
│  │  └─ leg_back_right.png
│  ├─ <monster_id>.atlas
│  ├─ <monster_id>_skeleton_template.json
│  ├─ slot_manifest.json
│  ├─ skin_mapping.json
│  └─ animation_contract.json
├─ reference/
└─ manifest.json
```

### 生物拆件重點

- 四肢必須拆成四個獨立素材檔，不可合併：
  - `leg_front_left.png`
  - `leg_front_right.png`
  - `leg_back_left.png`
  - `leg_back_right.png`
- 頭、身體、尾巴、翅膀、角、殼、背刺、特效等可動或可分層部位，應獨立成檔。
- 特效不得烙進主體，需另存為 effect / particle 檔。

---

## 2. 角色 / 穿戴裝備歸檔規則

適用：玩家角色、職業外觀、盔甲、法袍、髮型、臉、頭盔、手套、鞋子、武器、盾牌、披風等。

角色素材與生物不同，因為需要支援**性別差異、換裝與共用骨架**。

標準結構：

```txt
models/characters/
├─ phaser/
│  ├─ sprites_128/
│  │  ├─ body_plate_m.png
│  │  ├─ body_plate_f.png
│  │  ├─ body_robe_m.png
│  │  └─ body_robe_f.png
│  └─ sprites_64/
│     ├─ body_plate_m.png
│     ├─ body_plate_f.png
│     ├─ body_robe_m.png
│     └─ body_robe_f.png
├─ parts/
│  ├─ male/
│  │  ├─ base_body_m.png
│  │  ├─ face_m.png
│  │  ├─ hair_m.png
│  │  ├─ body_plate_m.png
│  │  ├─ hands_plate_m.png
│  │  └─ feet_plate_m.png
│  └─ female/
│     ├─ base_body_f.png
│     ├─ face_f.png
│     ├─ hair_f.png
│     ├─ body_plate_f.png
│     ├─ hands_plate_f.png
│     └─ feet_plate_f.png
├─ spine/
│  ├─ male/
│  └─ female/
└─ manifest.json
```

### 角色命名重點

- 角色穿戴類必須加性別後綴：
  - 男：`_m`
  - 女：`_f`
- 武器、盾牌、披風若男女通用，可不加性別後綴。
- 角色面向右；怪物面向左。
- 角色的 parts 必須對齊同一套男/女骨架座標，不可像怪物那樣每隻各自一套比例。

---

## 3. 共通規格

- PNG / RGBA / 透明背景
- 無白邊殘留
- 單一主體、無浮空殘塊
- 怪物面向左，角色面向右，武器握把朝下
- 特效與主體分離
- 檔名使用全小寫底線命名，並匹配遊戲編號

---

## 4. 目前批次流程

後續每完成一批素材，都會重新打包並同步整理到 `models/` 對應資料夾，避免素材傳承遺失。

目前先以 `porcupine` 與 `skunk` 作為生物/怪物歸檔範本。