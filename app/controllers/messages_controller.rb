class MessagesController < ApplicationController

  def index
    # @messages = Message.includes(:user).page(params[:page]).per(5).order("created_at DESC")
  end
end
