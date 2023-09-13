class CreateIdeas < ActiveRecord::Migration[7.0]
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :description
      t.string :picture
      t.date :published_at

      t.timestamps
    end
  end
end
