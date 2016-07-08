module ApplicationHelper
  def title(page_title)
    content_for :title, page_title.to_s
  end

  def months_to_string(number)
    years = number / 12
    months = number % 12
    str = years != 0 ? ( number_to_string(years) + " years" + ( months ? ", " + number_to_string(months) + " month": "" ) ) :
        number_to_string(months) + " month"
    str += "s" if months > 1
    str
  end

  private


    def number_to_string(number)
      @numbers = {0=>"zero", 1=>"one", 2=>"two", 3=>"three",
                  4=>"four", 5=>"five",6=>"six", 7=>"seven", 8=>"eight",
                  9=>"nine",10=>"ten",11=>"eleven",12=>"twelve",
                  13=>"thirteen",14=>"fourteen",15=>"fifteen",
                  16=>"sixteen",17=>"seventeen",18=>"eighteen",
                  19=>"nineteen",20=>"twenty",30=>"thirty",
                  40=>"fourty",50=>"fifty",60=>"sixty",70=>"seventy",
                  80=>"eighty",90=>"ninety"}
      @numbers[number]
    end

end
