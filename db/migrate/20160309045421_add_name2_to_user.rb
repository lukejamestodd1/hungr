class AddName2ToUser < ActiveRecord::Migration
  def change
    add_column :users, :name2, :integer
  end
end
