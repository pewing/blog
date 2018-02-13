class PagesController < ApplicationController

  def home

  end

  def about

  end

  def work

  end

  def contact
    @is_contact = true
  end

  def encrypt

    render text: "#{params[:id]}.UWlyDARvirny6x0vKFX_MyrJkSjOkrs1x3ojTNjlBwo"
  end
end