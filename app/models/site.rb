class Site < ApplicationRecord
    has_many :builds
    
    # Validations
    validates :name, presence: true
    validates :description, presence: true
    
end
