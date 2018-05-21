# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

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
