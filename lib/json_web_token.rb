class JsonWebToken
    class << self
        SECRET_KEY = ENV["RAILS_ENV"] == "production" ? ENV["SECRET_KEY_BASE"] : Rails.application.secrets.secret_key_base.to_s
        def encode(payload, exp = 24.hours.from_now)
            payload[:exp] = exp.to_i
            JWT.encode(payload, SECRET_KEY)
        end
        
        def decode(token)
            body = JWT.decode(token, SECRET_KEY)[0]
            HashWithIndifferentAccess.new body
        rescue
            nil
        end
    end
end