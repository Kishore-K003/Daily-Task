FROM python:3.11-slim

WORKDIR /app

# Copy requirements and upgrade pip
COPY requirements.txt .
RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
