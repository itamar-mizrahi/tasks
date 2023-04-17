deg=input('Insert the temperature you would like to convert:')
deg = deg.lower()
def degConv(deg1):
  if (deg1[-1]=='f'):
    Celsius = (deg[:-1] - 32) * 5.0 / 9.0 
    print(Celsius)

degConv(deg)
  
