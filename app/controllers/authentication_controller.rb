class AuthenticationController < ApplicationController
    skip_before_action :authenticate_request
   
    def login
        command = AuthenticateUser.call(params[:email], params[:password])

        if command.success?
            render json: { auth_token: command.result }
        else
            render json: { error: command.errors }, status: :unauthorized
        end
    end

    def register
        user = User.create!(register_params)
        if user.valid?
            render json: { message: 'User created successfully' }, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :bad_request
        end
    end

    private

    def register_params
        params.permit(
            :username,
            :name,
            :email,
            :password,
            :password_confirmation
        )
    end
end