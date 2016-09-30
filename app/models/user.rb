class User < ActiveRecord::Base
  after_initialize :ensure_session_token

  validates :username, :password_digest, presence: true
  validates :session_token, presence:  true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }


  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    token = SecureRandom.urlsafe_base64(16)

    while User.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64(16)
    end

    self.session_token = token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
