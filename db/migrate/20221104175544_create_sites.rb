class CreateSites < ActiveRecord::Migration[6.1]
  def change
    create_table :sites do |t|
      t.integer :user_id
      t.integer :build_id
      t.string :name
      t.string :title
      t.string :tagline
      t.string :email
      t.text :description
      t.string :repo_url
      t.string :repo_name
      t.string :repo_branch
      t.string :domain

      t.timestamps
    end
  end
end
