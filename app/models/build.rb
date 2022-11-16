class Build < ApplicationRecord
    belongs_to :site

    # Validations
    validates :title, presence: true
end
