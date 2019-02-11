class ApplicationMailer < ActionMailer::Base
  default from: 'samanthatitewebber@gmail.com'
  layout 'mailer'

  def registration_email(user)
    @user = user
    mail(to: @user.email, subject: "Successful Registration with Antakya Török Büfé")
  end
end
