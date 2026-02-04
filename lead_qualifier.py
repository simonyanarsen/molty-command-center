import os
import json
import google.generativeai as genai

class LeadQualifier:
    """
    Модуль для автоматической квалификации лидов с использованием ИИ Gemini.
    Позволяет бизнесу фокусироваться на высокочековых клиентах, отсеивая информационный шум.
    """
    def __init__(self, api_key: str):
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    def qualify_lead(self, lead_data: dict) -> dict:
        """
        Анализирует данные лида и выносит вердикт о его ценности.
        """
        prompt = f"""
        Проанализируй входящую заявку для IT-компании UFreeSoft (облачные решения, ИИ).
        Данные заявки: {json.dumps(lead_data, ensure_ascii=False)}
        
        Твоя задача:
        1. Оценить серьезность намерения (0-10).
        2. Определить потенциальный бюджет (Low, Medium, High).
        3. Написать краткое резюме: почему этот клиент важен.
        4. Дать вердикт: СРОЧНО, ОБЫЧНО или ОТКАЗ.
        
        Верни ответ в формате JSON.
        """
        
        response = self.model.generate_content(prompt)
        try:
            # Извлекаем JSON из ответа
            result = response.text.strip().replace('```json', '').replace('```', '')
            return json.loads(result)
        except:
            return {"error": "Не удалось распарсить ответ ИИ", "raw": response.text}

if __name__ == "__main__":
    # Пример работы (демо-данные)
    demo_lead = {
        "name": "Иван",
        "message": "Нужна сложная облачная система для ритейл-сети на 500 магазинов. Срочно.",
        "company": "BigRetail Group"
    }
    print("Квалификация тестового лида...")
    # Здесь мы будем использовать ключ из окружения
