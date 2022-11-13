class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.integer :user_id
      t.integer :site_id
      t.text :description

      t.timestamps
    end
  end
end
