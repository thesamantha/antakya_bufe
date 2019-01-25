class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, flash: { :success => "Üdvözöljünk, #{user.email}!" }
    else
      flash[:alert] = "Email-od vagy jelszavad nem stimmel."
      render "home/index"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Kiléptél!"
  end
end