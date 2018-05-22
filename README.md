## messageテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong to :group
- belong to :user

## groupテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|name|text|null: false, unique: true|

## userテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|name|text|null: false, unique: true|

## memberテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong to :group
- belong to :user
