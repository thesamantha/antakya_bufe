class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, flash: { :success => "Üdvözöljünk, #{user.name}!" }
    else
      redirect_to root_url, flash: { :error => "Emaile vagy jelszavad nem stimmel."}
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Kiléptél!"
  end
end
