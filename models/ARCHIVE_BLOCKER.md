# Archive blocker

目前 `models/` 的 README / manifest / archive_status 已進 GitHub，但 PNG binary 本體尚未正式進 repo。

原因：目前可用的 GitHub connector 寫入介面主要支援文字檔與 blob/tree/commit 流程；若要正式把 `/mnt/data` 中的 PNG 批量寫入 repo，需要能把本地 binary 檔案逐檔轉成 blob 並提交到 tree。這件事不應該停在 manifest。

處理原則：

1. 素材完成後必須同批完成歸檔。
2. `archived_complete` 只能在 PNG binary 本體也進 repo 後標記。
3. 在 binary 未進 repo 前，不得宣稱完整歸檔完成。

目前 batch01 實際狀態：

- README：已進 GitHub
- skunk manifest：已進 GitHub
- porcupine manifest：已進 GitHub
- batch01 archive status：已進 GitHub
- PNG 本體：仍在本地保存包，尚未進 repo

本地保存包：`/mnt/data/MWI_batch01_skunk_porcupine_preservation_pack.zip`
