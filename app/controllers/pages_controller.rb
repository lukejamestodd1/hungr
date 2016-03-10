class PagesController < ApplicationController
  
  #home/landing page - before login
  def index
    render :index
  end 

  def spa
    render :spa, layout: false
  end

  
end