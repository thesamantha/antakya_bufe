# Preview all emails at http://localhost:3000/rails/mailers/application_mailer
class ApplicationMailerPreview < ActionMailer::Preview
  def registration_email_preview
    ApplicationMailer.registration_email(User.first)
  end
end
