class Activity < ApplicationRecord
    # Validations
    validates :description, presence: true
end
