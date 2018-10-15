using System;
using System.Security.Cryptography;
using System.Text;

namespace Core.Services.EncryptorService
{
    /// <summary>
    /// Класс для шифрования данных. Алгоритм шифрования - SHA256Managed
    /// </summary>
    public class EncryptorService : IEncryptorService
    {
        /// <summary>
        /// Шифрует входную строку
        /// </summary>
        /// <param name="data">Входная строка</param>
        /// <returns>Зашифрованная строка</returns>
        public string Encrypt(string data)
        {
            var encoding = new UnicodeEncoding();
            var sha = new SHA256Managed();

            var bytes = encoding.GetBytes(data);
            var hash = sha.ComputeHash(bytes);

            return Convert.ToBase64String(hash);
        }
    }
}
