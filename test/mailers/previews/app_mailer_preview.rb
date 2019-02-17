# Preview all emails at http://localhost:3000/rails/mailers/app_mailer
class AppMailerPreview < ActionMailer::Preview
  def registration_email_preview
    AppMailer.registration_email(User.first)
  end

  def order_email_preview
    AppMailer.order_email(User.first, Order.first)
  end
end
