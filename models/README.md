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

## 4. 風格統一要點

整體風格固定為 **日式幻想 JRPG 魔物 / 碧藍幻想系高精細手繪感**，但不得直接複製官方角色或官方素材。

### 美術風格

- 高精度手繪感，輪廓清楚，暗部與高光明確。
- 有幻想感飾品，例如項圈、吊墜、護腕、金屬飾片、水晶或符文。
- 可有少量環繞特效提升氣勢，但主體圖不可烙入特效；特效需獨立成圖層。
- 毛髮、尖刺、尾巴、翅膀等 silhouette 要清楚，不能碎成雜毛。
- 保持一圖一主體，無背景、無白邊、無浮空殘塊。

### 工程風格

- 先定稿完整全身圖，再從同一設計拆出 parts / spine attachments，避免每個部位看起來像不同角色。
- `phaser` 版用於立即顯示；`parts` 版用於拼接與局部動畫；`spine` 版用於未來骨架動畫。
- 部位圖不能各自置中，必須維持組合後位置與骨架座標。
- 可動部位、關節、尾巴、背刺、翅膀、飾品、特效都要獨立歸檔。

---

## 5. 範例：skunk

`skunk` 的定位是 **暗屬性 / 毒霧系小型幻想野獸**。

### skunk 風格要點

- 主識別是黑白毛色與大蓬尾，白色條紋要從頭頂延伸到尾部。
- 姿態偏低伏、警戒、朝左，適合戰鬥場景。
- 可加入紫色毒霧、紫眼、皮革項圈、金屬鉚釘、吊墜等增加 JRPG 氣勢。
- 毒霧或臭氣不可烙進主體，應另存 `effect_poison_mist.png` 或 particle 檔。

### skunk 拆件建議

```txt
head.png
body.png
tail.png
leg_front_left.png
leg_front_right.png
leg_back_left.png
leg_back_right.png
collar.png          # optional
pendant.png         # optional
effect_poison_mist.png # optional, independent effect layer
```

### skunk 注意事項

- 四肢必須是四個獨立 PNG。
- 尾巴是核心輪廓，需獨立檔，方便 idle 擺動。
- Spine-ready 版需在肩、髖、膝/踝、尾根保留可旋轉重疊區。

---

## 6. 範例：porcupine

`porcupine` 的定位是 **重甲刺獸 / 土晶或金屬屬性魔獸**。

### porcupine 風格要點

- 主識別是背刺，輪廓要像大型尖刺扇面。
- 刺可帶金屬尖端、土晶碎片或金色高光，讓牠比普通豪豬更像 JRPG 魔物。
- 身體低伏厚重，前爪強壯，像坦克型小 Boss。
- 可加入頸圈、護腕、紅寶石吊墜、晶塵特效。
- 土黃色晶塵、碎石、尖刺衝擊等特效要獨立圖層，不可烙進主體。

### porcupine 拆件建議

```txt
head.png
body.png
back_quills.png
tail.png
leg_front_left.png
leg_front_right.png
leg_back_left.png
leg_back_right.png
collar.png          # optional
pendant.png         # optional
effect_earth_dust.png  # optional
effect_quill_burst.png # optional
```

### porcupine 注意事項

- `back_quills.png` 必須獨立，因為它可用於 idle 微動、attack 展刺或射刺動畫。
- 如果要更精緻，可再拆 `quills_front.png / quills_mid.png / quills_back.png`。
- 四肢一樣不能合併，要各自獨立檔。

---

## 7. 目前批次流程

後續每完成一批素材，都會重新打包並同步整理到 `models/` 對應資料夾，避免素材傳承遺失。

目前先以 `porcupine` 與 `skunk` 作為生物/怪物歸檔範本。