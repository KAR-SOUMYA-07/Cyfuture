from datetime import datetime, timedelta
from typing import List, Dict
import pandas as pd
import numpy as np

class CashflowForecast:
    def __init__(self):
        self.forecast_period = 30  # days
        self.confidence_interval = 0.95

    def calculate_forecast(self, historical_data: List[Dict]) -> Dict:
        """
        Calculate cashflow forecast based on historical data
        
        Args:
            historical_data: List of dictionaries containing date and amount
            
        Returns:
            Dictionary containing forecast data
        """
        try:
            # Convert historical data to DataFrame
            df = pd.DataFrame(historical_data)
            df['date'] = pd.to_datetime(df['date'])
            df.set_index('date', inplace=True)
            
            # Calculate basic statistics
            mean_daily = df['amount'].mean()
            std_daily = df['amount'].std()
            
            # Generate forecast dates
            last_date = df.index.max()
            forecast_dates = pd.date_range(
                start=last_date + timedelta(days=1),
                periods=self.forecast_period,
                freq='D'
            )
            
            # Generate forecast values
            forecast_values = np.random.normal(
                mean_daily,
                std_daily,
                size=self.forecast_period
            )
            
            # Calculate confidence intervals
            z_score = 1.96  # for 95% confidence interval
            lower_bound = forecast_values - z_score * std_daily
            upper_bound = forecast_values + z_score * std_daily
            
            # Prepare forecast data
            forecast_data = {
                'dates': forecast_dates.strftime('%Y-%m-%d').tolist(),
                'forecast': forecast_values.tolist(),
                'lower_bound': lower_bound.tolist(),
                'upper_bound': upper_bound.tolist(),
                'mean_daily': float(mean_daily),
                'std_daily': float(std_daily)
            }
            
            return forecast_data
            
        except Exception as e:
            raise Exception(f"Error in cashflow forecast calculation: {str(e)}")

    def get_forecast_summary(self, forecast_data: Dict) -> Dict:
        """
        Generate summary statistics from forecast data
        
        Args:
            forecast_data: Dictionary containing forecast data
            
        Returns:
            Dictionary containing summary statistics
        """
        try:
            forecast_values = forecast_data['forecast']
            
            summary = {
                'total_forecast': sum(forecast_values),
                'average_daily': np.mean(forecast_values),
                'min_daily': min(forecast_values),
                'max_daily': max(forecast_values),
                'forecast_period': self.forecast_period,
                'confidence_interval': self.confidence_interval
            }
            
            return summary
            
        except Exception as e:
            raise Exception(f"Error in forecast summary calculation: {str(e)}") 