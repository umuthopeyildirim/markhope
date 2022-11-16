class Activity < ApplicationRecord
    belongs_to :user
    
    # Validations
    validates :description, presence: true
end
