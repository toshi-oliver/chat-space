## messageテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|body|text|foreign_key: true|
|image|string|foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|timestamp|integer|null: false|

### Association
- belong to :group
- belong to :user

## groupテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|name|text|null: false, unique: true, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## userテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|name|text|null: false, unique: true, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

## memberテーブル

|Coulumn|Type|Options|
|-------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong to :group
- belong to :user
