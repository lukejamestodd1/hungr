OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, 570954089746962, 'd43eb1131a277f2ad1d28ed2bbaef409', scope: ['public_profile', 'user_friends']
end


 # provider :facebook, ENV['FB_APP_ID'], ENV['FB_APP_SECRET'], :scope =>'public_profile,user_about_me,user_birthday', info_fields: 'id,name,email,age_range,locale,gender'