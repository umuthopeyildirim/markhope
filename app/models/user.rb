class User < ApplicationRecord
    has_secure_password
    has_many :sites
    has_many :build, through: :sites
end
