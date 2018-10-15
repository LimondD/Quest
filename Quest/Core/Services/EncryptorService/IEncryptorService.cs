namespace Core.Services.EncryptorService
{
    /// <summary>
    /// Интерфейс класса шифрования данных
    /// </summary>
    public interface IEncryptorService
    {
        /// <summary>
        /// Шифрует входную строку
        /// </summary>
        /// <param name="data">Входная строка</param>
        /// <returns>Зашифрованная строка</returns>
        string Encrypt(string data);
    }
}
