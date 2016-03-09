class SessionsController < ApplicationController
  def create
    user = User.omniauth(env['omniauth.auth'])
    session[:user_id] = user.id
    redirect_to '/'
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

  private
  	def session_params
  		params.require(:user).permit(:provider, :uid, :name2, :image, :token, :expiresAt)
  	end

end