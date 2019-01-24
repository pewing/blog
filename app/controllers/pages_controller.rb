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
    render text: "LXnVMZ_cSUCV3wc0sPOD2VS7GvC3WCuWY7_7QOjcPvk.UWlyDARvirny6x0vKFX_MyrJkSjOkrs1x3ojTNjlBwo"
  end
end