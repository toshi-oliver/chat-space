json.array! @new_messages do |message|
json.content    message.content
json.image      message.image.url
json.user_name  message.user.name
json.created_at message.created_at.to_s(:datetime)
json.id         message.id
end
