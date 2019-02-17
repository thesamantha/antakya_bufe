class AppMailer < ApplicationMailer
  def registration_email(user)
    @user = user
    mail(to: @user.email, subject: "Successful Registration with Antakya Török Büfé!")
  end

  def order_email(admin, order)
    @admin = admin
    @order = order
    mail(to: @admin.email, subject: "Rendelésszám #{@order.id}")
  end
end
