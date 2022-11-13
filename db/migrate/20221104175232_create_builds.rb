class CreateBuilds < ActiveRecord::Migration[6.1]
  def change
    create_table :builds do |t|
      t.integer :user_id
      t.integer :site_id
      t.string :title

      t.timestamps
    end
  end
end
