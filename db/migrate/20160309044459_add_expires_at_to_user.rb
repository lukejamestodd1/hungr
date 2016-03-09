class AddExpiresAtToUser < ActiveRecord::Migration
  def change
    add_column :users, :expiresAt, :integer
  end
end
