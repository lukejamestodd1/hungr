json.array!(@statuses) do |status|
  json.extract! status, :id, :name, :image_url
  json.url status_url(status, format: :json)
end
