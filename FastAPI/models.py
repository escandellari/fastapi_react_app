from database import Base
from sqlalchemy import Boolean, Column, Float, Integer, String


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float)
    category = Column(String)
    description = Column(String)
    is_income = Column(Boolean)
    date = Column(String)
