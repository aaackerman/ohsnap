module Features
  module SessionHelpers

    def log_in_with(email, password)
      visit root_path
      click_on 'Sign In'
      fill_in 'Email', with: email
      fill_in 'Password', with: password
      click_button 'Sign In'
    end

    def sign_up_with(username, first_name, last_name, email, password)
      visit root_path
      click_on 'Sign Up'
      fill_in 'Username', with: username
      fill_in 'First name', with: first_name
      fill_in 'Last name', with: last_name
      fill_in 'Email', with: email
      fill_in 'Password', with: password 
      fill_in 'Password confirmation', with: password
      click_button 'Sign Up'
    end
  end
end